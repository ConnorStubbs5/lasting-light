# Instagram-Style Memories Feature for Lasting Light

This is a great feature idea because it makes the memorial feel more personal and interactive while still remaining fully static.

The idea:

* Add a second button on the Hero screen
* Opens a fake Instagram-style memorial profile
* Configurable through `config.json`
* Displays:

  * Profile picture
  * Bio / description
  * Gallery grid of memories

---

# 1. Update `config.json`

Add these new fields:

```json
{
  "name": "Rose Enright",
  "subtitle": "Beloved Mother, Grandmother, and Friend",

  "profile": {
    "username": "rose.enright",
    "profilePicture": "/memorials/rose-enright/profile/profile.jpg",
    "bio": "Lover of family, sunsets, and James Taylor.",
    "posts": 80,
    "followers": "Forever Loved",
    "following": "Always Remembered"
  },

  "song": "/memorials/rose-enright/music/song.mp3",

  "slides": [
    { "type": "image", "file": "photos/photo001.jpeg" },
    { "type": "image", "file": "photos/photo002.jpeg" }
  ]
}
```

---

# 2. Create `InstagramMemories.jsx`

Location:

```text
src/components/InstagramMemories.jsx
```

Code:

```jsx
export default function InstagramMemories({ config, onBack }) {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">

      {/* Header */}
      <div className="sticky top-0 z-50 bg-black border-b border-zinc-800 p-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
        >
          ← Back
        </button>

        <h1 className="text-lg font-semibold">
          Memories
        </h1>

        <div className="w-16" />
      </div>

      {/* Profile Section */}
      <div className="max-w-3xl mx-auto p-6">

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

          <img
            src={config.profile.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700"
          />

          <div className="flex-1 text-center sm:text-left">

            <h2 className="text-2xl font-bold mb-2">
              @{config.profile.username}
            </h2>

            <div className="flex gap-6 justify-center sm:justify-start mb-4 text-sm text-zinc-300">
              <span>
                <strong>{config.profile.posts}</strong> posts
              </span>

              <span>
                {config.profile.followers}
              </span>

              <span>
                {config.profile.following}
              </span>
            </div>

            <p className="text-zinc-200 leading-relaxed max-w-xl">
              {config.profile.bio}
            </p>

          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-3 gap-1 mt-10">

          {config.slides
            .filter(slide => slide.type === "image")
            .map((slide, index) => (

              <div
                key={index}
                className="aspect-square overflow-hidden bg-zinc-900"
              >

                <img
                  src={`/memorials/rose-enright/${slide.file}`}
                  alt="Memory"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />

              </div>
            ))}

        </div>

      </div>

    </div>
  )
}
```

---

# 3. Update `HeroOverlay.jsx`

Add a second button.

Example:

```jsx
<div className="flex gap-4 mt-6">

  <button
    onClick={onStart}
    className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
  >
    Begin Tribute
  </button>

  <button
    onClick={onOpenMemories}
    className="px-8 py-4 rounded-2xl bg-zinc-800 text-white font-semibold hover:bg-zinc-700 transition"
  >
    View Memories
  </button>

</div>
```

---

# 4. Update `MemorialPage.jsx`

Add a new state:

```jsx
const [view, setView] = useState("home")
```

---

Update start function:

```jsx
const startTribute = async () => {
  setView("tribute")
  setStarted(true)

  try {
    audioRef.current.volume = 0.4
    await audioRef.current.play()
  } catch (err) {
    console.error(err)
  }
}
```

---

Add memories open function:

```jsx
const openMemories = () => {
  setView("memories")
}
```

---

Update stop function:

```jsx
const stopTribute = () => {
  if (audioRef.current) {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
  }

  setStarted(false)
  setView("home")
}
```

---

Import component:

```jsx
import InstagramMemories from "../components/InstagramMemories"
```

---

Update render logic:

```jsx
{view === "home" && (
  <HeroOverlay
    config={config}
    onStart={startTribute}
    onOpenMemories={openMemories}
  />
)}

{view === "tribute" && (
  <MemorialSlideshow
    slides={config.slides}
    onBack={stopTribute}
  />
)}

{view === "memories" && (
  <InstagramMemories
    config={config}
    onBack={() => setView("home")}
  />
)}
```

---

# 5. Recommended Folder Structure

```text
public/
  memorials/
    rose-enright/
      photos/
      profile/
        profile.jpg
```

---

# Why this is a strong feature

This is actually a very smart addition because:

* It feels modern and familiar
* Younger visitors instantly understand the UI
* It creates a "digital life archive" feeling
* It remains completely static (easy GitLab hosting)
* It evolves naturally into a future memorial social platform

Most importantly:

It transforms the memorial from:

```text
slideshow viewer
```

into:

```text
interactive memory experience
```

which fits Lasting Light perfectly.

---

# Future Upgrade Ideas

Later you could add:

* image modal viewer
* fake comments from family
* fake highlights/stories
* timeline tabs
* favorite memories section
* music tied to gallery scrolling
* profile themes
* family member tagged memories

without needing a backend initially.

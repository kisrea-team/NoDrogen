"use client";
export default function DarkButton() {
  function Dark() {
    if (document.body.classList.contains("dark"))
      document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }
  return (
    <button
      onClick={Dark}
      className="px-3 py-1 border border-stone-200 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400"
    >
      Toggle Theme
    </button>
  );
}

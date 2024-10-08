export default function App() {
  return (
    <div className="h-lvh bg-[#171616]">
      <div className="p-4 flex justify-center">
        <div className="card bg-primary image-full w-[1000px] shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Diablo Story</h2>
            <p>
              In Diablo 4, the story revolves around the rise of a dark force:
              Lilith, the daughter of Mephisto, who has returned to the world of
              Sanctuary. After being imprisoned for centuries, Lilith is
              released by a cult and begins spreading chaos, influencing
              humanity with her vision of freedom through destruction. Players
              take on the role of a wanderer who gets caught in the conflict
              between Lilith and the forces of Heaven and Hell. The world is
              plunged into turmoil, with demonic invasions, civil unrest, and
              broken alliances, as Lilith seeks to reshape Sanctuary in her
              image. As the player ventures through the lands, they encounter
              old characters from the series, such as Tyrael, and must battle
              through the legions of demons and cultists to stop Lilith's dark
              plans before the world succumbs to evil. The story is dark, filled
              with moral choices and consequences, as Sanctuary teeters on the
              edge of ruin.
            </p>
          </div>
        </div>
      </div>
      <div className="mockup-code max-w-[800px] mx-auto p-4">
        <pre data-prefix="$">
          <code>All Games</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>One (1997)</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Two (2000)</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Three (2021)</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Four (2023)</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Four DLC (2024)</code>
        </pre>
      </div>
      <div className="p-4 flex justify-center">
        <div className="card bg-success image-full w-[1000px] shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Latest News</h2>
            <p>
              The latest Diablo 4 expansion, Vessel of Hatred, is set for
              release on October 8, 2024. This new chapter builds on the
              character Neyrelle, who now holds Mephisto’s Soul Stone, and dives
              deeper into her struggle as the demon attempts to influence her
              actions. The expansion introduces a new region and a class called
              Spiritborn, which allows players to mix and match skills from four
              different spirit guardians.
            </p>
          </div>
        </div>
      </div>
      <label className="form-control max-w-[800px] mx-auto mt-10">
        <div className="label">
          <span className="label-text">Feedback</span>
          <span className="label-text-alt">Note</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Provide Comment"
        ></textarea>
        <div className="label">
          <span className="label-text-alt">Date</span>
          <span className="label-text-alt">Status</span>
        </div>
      </label>
    </div>
  );
}

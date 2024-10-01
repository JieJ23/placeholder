export default function App() {
  return (
    <>
      <div className="p-4 flex flex-wrap gap-2 justify-center">
        <div className="card bg-primary image-full w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Box 1</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              natus harum minima quia incidunt illo numquam dolorem odio,
              facilis accusamus!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Btn1 </button>
            </div>
          </div>
        </div>
        <div className="card bg-primary image-full w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Box 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
              placeat commodi, esse dignissimos et!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Btn2</button>
            </div>
          </div>
        </div>
        <div className="card bg-primary image-full w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Box 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              neque temporibus iure ipsam iusto laudantium dolorem possimus.
              Vero officia quae porro quis quidem animi accusamus?
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Btn3</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mockup-code max-w-[800px] mx-auto p-4">
        <pre data-prefix="$">
          <code>Testing Layout</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Install Frame...</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Config File...</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Install Plugin</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
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
    </>
  );
}

import Container from "../ui/Container";

const software = [
  "AutoCAD",
  "SketchUp",
  "Enscape",
  "Adobe Photoshop",
];

const designSkills = [
  "Model Making",
  "Hand Drawing",
  "Architectural Visualization",
  "Presentation Boards",
  "Spatial Planning",
  "Concept Development",
];

export default function Profile() {
  return (
    <section
      id="profile"
      className="py-32"
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Profile
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              ENA MEI CHEN HO
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              I am an Architecture student at Universiti Tunku Abdul Rahman
              (UTAR) who enjoys creating spaces that strengthen the relationship
              between people, nature, and everyday life. Through academic
              projects, I explore how light, landscape, and spatial experiences
              can shape meaningful environments while continuously developing my
              technical and design skills.
            </p>

          </div>

          {/* Right */}

          <div className="rounded-[40px] border  p-10 shadow-sm">

            <div>

              <h3 className="text-xl font-semibold">
                Education
              </h3>

              <div className="mt-2 space-y-2 text-gray-600">

                <p>
                  Bachelor of Science (Honours) in Architecture
                </p>

                <p>
                  Universiti Tunku Abdul Rahman (UTAR)
                </p>

                <p>
                  Expected Graduation: February 2028
                </p>

                <p>
                  Dean List (2 Semesters)
                </p>

              </div>

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                <br></br>
                Software
              </h3>

              <div className="mt-2 flex flex-wrap gap-3">

                {software.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
            
            <div>

                <h3 className="text-xl font-semibold">
                    <br></br>
                    Design Skills
                </h3>

                <div className="mt-2 flex flex-wrap gap-3">

                    {designSkills.map((item) => (

                    <span
                        key={item}
                        className="rounded-full border px-4 py-2 text-sm"
                    >
                        {item}
                    </span>

                    ))}

                </div>

                </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
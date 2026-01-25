import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/4550" className="wd-dashboard-course-link">
            <Image src="/images/web.jpg" width={200} height={150} alt="Web Dev" />
            <div>
              <h5>CS4550 Web Development</h5>
              <p className="wd-dashboard-course-title">
                 Web Dev
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/3200" className="wd-dashboard-course-link">
            <Image src="/images/ds.jpg" width={200} height={150} alt="Data Science" />
            <div>
              <h5>DS3200 Foundations of Data Science</h5>
              <p className="wd-dashboard-course-title">
                Intro to DS
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/3000" className="wd-dashboard-course-link">
            <Image src="/images/algo.jpg" width={200} height={150} alt="Algorithms" />
            <div>
              <h5>CS3000 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/2500" className="wd-dashboard-course-link">
            <Image src="/images/ood.jpg" width={200} height={150} alt="OOD" />
            <div>
              <h5>CS2500 Object Oriented Design</h5>
              <p className="wd-dashboard-course-title">
                OOD
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/4973" className="wd-dashboard-course-link">
            <Image src="/images/topics.jpg" width={200} height={150} alt="Topics" />
            <div>
              <h5>CS4973 Topics in Computer Science</h5>
              <p className="wd-dashboard-course-title">
                Topics in CS
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/1800" className="wd-dashboard-course-link">
            <Image src="/images/discrete.jpg" width={200} height={150} alt="Discrete" />
            <div>
              <h5>CS1800 Discrete Structures</h5>
              <p className="wd-dashboard-course-title">
               Discrete
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/3200" className="wd-dashboard-course-link">
            <Image src="/images/databases.jpg" width={200} height={150} alt="Databases" />
            <div>
              <h5>CS3200 Intro to Databases</h5>
              <p className="wd-dashboard-course-title">
                Intro to Databases
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
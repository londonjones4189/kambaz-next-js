import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">

      <Link href="/account/signin" id="wd-account-signin-link">
        <div className="list-group-item border-0 text-dark border-start border-3 border-black ps-3">
         Signin
        </div>

      </Link>

      <Link href="/account/signup" id="wd-account-signup-link">
        <div className="list-group-item border-0 text-danger ps-3">
          Signup
        </div>
      </Link>

      <Link href="/account/profile" id="wd-account-profile-link">
        <div className="list-group-item border-0 text-danger ps-3">
          Profile
        </div>
      </Link>

    </div>
  );
}

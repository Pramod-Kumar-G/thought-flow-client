import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const { mutate } = useLogout();
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="text-lg font-semibold">ThoughFlow</div>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to={"/"}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>

          <Link
            to={"/"}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blogs
          </Link>

          <Link
            to={"/new-blog"}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Create
          </Link>
        </nav>

        {/* Auth Buttons */}

        <div className="flex items-center gap-2">
          {user ? (
            <Button
              onClick={() => {
                mutate();
              }}
            >
              Logout
            </Button>
          ) : (
            <div>
              <Button variant="ghost">
                <Link to={"/login"}>Login</Link>
              </Button>
              <Button>
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

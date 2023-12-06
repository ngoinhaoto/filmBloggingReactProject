import NavbarSignIn from "@/components/NavbarSignIn";
export default function Layout({ children }) {
  return (
    <>
      <NavbarSignIn />

      <main>{children}</main>
    </>
  );
}

import NavbarSignIn from "@/components/navbar/NavbarSignIn";
export default function Layout({ children }) {
  return (
    <>
      <NavbarSignIn />

      <main>{children}</main>
    </>
  );
}

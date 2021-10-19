import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({children}) {
    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <main className="mt-14 mb-20">
                {children}
            </main>
            <Footer />
        </div>
    )
}

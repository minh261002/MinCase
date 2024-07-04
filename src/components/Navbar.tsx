import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const Navbar = () => {
    const user = false
    const isAdmin = false
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-grey-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold">
                        Min <span className="text-green-600">Case</span>
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        {
                            user ? (
                                <>
                                    <Link
                                        href='/api/auth/logout'
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost",
                                        })}
                                    >Logout</Link>

                                    {
                                        isAdmin ? (
                                            <Link
                                                href='/admin/dashboard'
                                                className={buttonVariants({
                                                    size: "sm",
                                                    variant: "ghost",
                                                })}
                                            >Dashboard</Link>
                                        ) : null
                                    }
                                    <Link
                                        href='/configure/upload'
                                        className={buttonVariants({
                                            size: "sm",
                                            className: "hidden sm:flex items-center gap-1",
                                        })}
                                    >Create Case
                                        <ArrowRight className="ml-1.5 h-5 w-5" />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href='/api/auth/login'
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost",
                                        })}
                                    >Login</Link>
                                    <Link
                                        href='/api/auth/signup'
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost",
                                        })}
                                    >Sign Up</Link>

                                    <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                                    <Link
                                        href='/configure/upload'
                                        className={buttonVariants({
                                            size: "sm",
                                            className: "hidden sm:flex items-center gap-1",
                                        })}
                                    >Create Case
                                        <ArrowRight className="ml-1.5 h-5 w-5" />
                                    </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
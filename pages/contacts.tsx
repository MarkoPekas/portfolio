import Head from "next/head"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <Head>
                <title>Contact</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
            </Head>
            <h1 className="xl:text-xl p-5 xl:p-50 text-gray-900 text-center">Hey! I{`'`}m only on <a className="text-sexy" href="https://www.toptal.com/resume/marko-pekas">Toptal</a> right now. Please contact me there if you are interested in working with me.</h1>
            <Link href='/'>
                <a className="xl:text-xl text-sexy">Go back</a>
            </Link>
        </div>
    )
}

export default Contact
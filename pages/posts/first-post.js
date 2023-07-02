import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    const YourComponent = () => (
        <Image
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt="Your Name"
        />
    )

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
            {YourComponent()}

        </Layout>
    );
}

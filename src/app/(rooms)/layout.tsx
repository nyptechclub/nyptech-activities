import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";



export default function Layout(props: { children: React.ReactNode }) {
    return (

        <div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            {props.children}

        </div>



    );
}
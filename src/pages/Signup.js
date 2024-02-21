import Header from '../components/Header'
import Signup from '../components/Signup'


export default function SignupPage(){
    return(
        <>
        <Header
            heading= "Sign up for an account"
            paragraph= "Already have an account ?"
            linkText= "Login"
            linkUrl="/"
        />
        <Signup />
        </>
    )
}
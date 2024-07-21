import LoginForm from "@/components/login/LoginForm";


const Login = () =>{
    return(
    <div className=' min-h-screen flex flex-col bg-gray-700'>
        <div className='w-full h-full'>
          <LoginForm />
        </div>
      </div>
    )
}

export default Login;
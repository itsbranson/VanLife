import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'


export async function loader({request}) {

    console.log(request)

    const url = new URL(request.url)

    const searchParams = url.searchParams

    return searchParams.get('message')
}


export default function Login() {

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    })

    const message = useLoaderData()

    console.log(message)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            { message && <h2 className="red">{ message }</h2> }
            <form onSubmit={ handleSubmit } className="login-form">
                <input
                    name="email"
                    onChange={ handleChange }
                    type="email"
                    placeholder="Email address"
                    value={ loginFormData.email }
                />
                <input
                    name="password"
                    onChange={ handleChange }
                    type="password"
                    placeholder="Password"
                    value={ loginFormData.password }
                />
                <button>Log in</button>
            </form>
        </div>
    )

}
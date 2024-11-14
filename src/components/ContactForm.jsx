import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {

    const [state, handleSubmit] = useForm("mwkgajre");

    if (state.succeeded) {
        return <p className='px-2 py-1 bg-card rounded-md'>Thanks, we'll be in touch soon!</p>;
    }

    return (
        <>
            <h5 className="font-bold text-xl md:text-2xl">Wanna Talk?</h5>
            <p>Submit your email to get in touch</p>
            <form onSubmit={handleSubmit} class="flex flex-wrap gap-2 items-center">
                <input
                    className="px-2 py-1 bg-card rounded-md border border-transparent outline-none focus:border-blue"
                    required
                    placeholder="example@example.com"
                    id='email'
                    name='email'
                    type="email"
                />
                <ValidationError prefix='Email' field='email' errors={state.errors}/>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-2 py-1 bg-blue rounded-md transition-all ease-in-out duration-200 hover:shadow-lg hover:shadow-blue/90"
                >Submit</button
                >
            </form>
        </>
    )
}
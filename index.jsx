const { useState } = React

export function EventRSVPForm() {

    const [form, setForm] = useState({ name: '', email: '', attendees: '', dietaryPreferences: '', bringingOthers: false })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        
        setSubmitted(data)
        e.target.reset()
        setForm({ name: '', email: '', attendees: '', dietaryPreferences: '', bringingOthers: false })

    }

    return (

        <div className="form-container">
            <h2>Event RSVP Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        <span>Name:</span>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <span>Email:</span>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <span>Number of Attendees:</span>
                        <input type="number" name="attendees" min="1" required value={form.attendees} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <span>Dietary Preferences:</span>
                        <input type="text" name="dietaryPreferences" value={form.dietaryPreferences} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <span>Bringing additional guests?</span>
                        <input type="checkbox" name="bringingOthers" checked={form.bringingOthers} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit RSVP</button>
            </form>
            
            {submitted && (
                <div className="submitted-message">
                    <h3>RSVP Submitted!</h3>
                    <p><strong>Name:</strong> {submitted.name}</p>
                    <p><strong>Email:</strong> {submitted.email}</p>
                    <p><strong>Number of Attendees:</strong> {submitted.attendees}</p>
                    <p><strong>Dietary Preferences:</strong> {submitted.dietaryPreferences}</p>
                    <p><strong>Bringing Others:</strong> {submitted.bringingOthers ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
        
    )

}
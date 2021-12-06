import Layout from '../components/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    return (
        <div className="content2">
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className="text-center">Contact form</h1>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
        </div>
    );
};

export default Contact;
import Footer from '@/components/footer';

export default async function WEC() {
    return (
        <div>
            <div className="flex flex-col items-start lg:items-center">
                <div className="container mx-auto">
                    <h1 className="text-accent font-courier sm:mx-2 lg:mx-10 mb-5 self-start">Tempest Tracker</h1>
                </div >
            </div >
            <div className="my-15">
                <Footer home={true} />
            </div>
        </div>
    );
}

export default function Badge({ brand }) {

    return (

        <div className="flex p-2 gap-2 cursor-pointer">

            <div className="flex flex-col text-center">
                <img src={brand.imageSrc} className="h-14 min-h-14 w-14 rounded-full bg-black m-2" />

                <h1 className="font-semibold">{brand.name}</h1>
            </div>
        </div>

    );
}
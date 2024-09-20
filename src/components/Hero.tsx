
const Hero = () => {
    const parallax = (e: MouseEvent) => {
        const object = document.querySelectorAll(".obj");
        object.forEach((move) => {
            const moveVal = move.getAttribute("data-value");
            const x = (e.clientX * Number(moveVal)) / 250;
            const y = (e.clientY * Number(moveVal)) / 250;

            (move as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    };

    return (
        <div
            className='w-full h-screen flex justify-center items-center bg-white relative'
            onMouseEnter={() => window.addEventListener("mousemove", parallax)}
            onMouseLeave={() => window.removeEventListener("mousemove", parallax)}
        >
            <div
                className="obj absolute flex flex-col text-black text-center transition-transform duration-1000 ease-out z-10"
                data-value={-5}
            >
                <span className="text-8xl font-black">NFT JUNCTION</span>
                <span className="text-4xl">
                    The Decentralized NFT Marketplace for Everyone
                </span>
            </div>

            {/* top left */}
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-1.png"
                className="obj w-24 absolute top-56 left-24 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={5}
            />
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-2.png"
                className="obj w-20 absolute top-24 left-24 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={-4}
            />

            {/* top right */}
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-3.png"
                className="obj w-20 absolute top-32 right-16 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={-6}
            />
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-4.png"
                className="obj w-20 absolute top-80 right-24 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={3}
            />

            {/* bottom left */}
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-5.png"
                className="obj w-20 absolute bottom-24 left-1/4 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={-9}
            />
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-6.png"
                className="obj w-20 absolute bottom-16 left-24 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={4}
            />

            {/* bottom right */}
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-7.png"
                className="obj w-16 absolute bottom-16 right-24 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={-9}
            />
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-8.png"
                className="obj w-16 absolute bottom-20 right-1/4 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={-8}
            />

            {/* free */}
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-9.png"
                className="obj w-16 absolute top-28 left-1/3 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={-9}
            />
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-10.png"
                className="obj w-20 absolute top-24 right-1/4 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={-9}
            />
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726762101/NFT_Junction_Assets/cr-11.png"
                className="obj w-20 absolute bottom-16 right-2/4 bg-white rounded-full transition-transform duration-1000 ease-out"
                data-value={4}
            />
        </div>

    );
};

export default Hero;
import { useEffect, useState } from 'react';
import axios from 'axios';

const CoinLive = () => {
    const [liveCoin, setLiveCoin] = useState<ICoin[]>();
    const filteredCoin = liveCoin?.filter((data) => Number(data.rank) <= 6);

    useEffect(() => {
        const fetchLive = async () => {
            try {
                const response = await axios.get("https://api.coincap.io/v2/assets");
                setLiveCoin(response.data.data);
            } catch (error) {
                console.error("Error fetching live coin data:", error);
            }
        };

        fetchLive();

        const intervalId = setInterval(() => {
            fetchLive();
        }, 900000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='w-full h-screen flex justify-center items-center p-12 bg-white'>
            <div className='w-[50%] flex flex-wrap justify-start items-center gap-4'>
                {filteredCoin?.map((data) => (
                    <div key={data.id} className='w-[40%] p-6 bg-black text-white rounded-xl'>
                        <p className='text-xl font-bold'>#{data.rank} {data.name} ({data.symbol})</p>
                        <p>${Number(data.priceUsd).toLocaleString("en-US")} ({Number(data.changePercent24Hr).toLocaleString("en-US")})
                        </p>
                    </div>
                ))}
            </div>

            <div className="w-[50%] flex flex-col text-black">
                <span className="text-6xl font-bold text-end">
                    Live Coin
                </span>

                <span className="text-xl text-justify mt-8">
                    Live Coin displays the prices of the top 6 coins, refreshed every 15 minutes, providing real-time information to monitor cryptocurrency market movements.
                </span>
            </div>
        </div>
    );
};

export default CoinLive;

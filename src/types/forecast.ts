

export type ForecastData = {
    city:{
        name: string;
        country: string; 
    },
    
    list: {
        dt: number;
        main: {
            temp: number;
            feels_like: number;
    
        };
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    dt_txt: string;

}[];
}


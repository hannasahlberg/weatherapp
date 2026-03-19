export type CurrentWeatherData = {
    name: string;
    weather: {
        main: string;
        description: string;
        icon: string;
    }[],
    main: {
        temp: number;
    },
    wind: {
        speed: number;
    },
    sys: {
        country: string;
    }


}
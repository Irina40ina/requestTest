async function getPetsByStatus(status: string): Promise<dataType | any> {
    const url = 'https://petstore3.swagger.io/api/v3';
    const params = new URLSearchParams({ status });
    
    try {
        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();
        console.log(response.json())
        return data;
    } catch (err) {
        console.error('Ошибка запроса на сервер', err);
    }
}

interface dataType {
    id: number | null;
    name: string;
    category: {
        id: number | null;
        name: string;
    };
    photoUrls: string[];
    tags: {
        id: number | null;
        name: string;
    }[];
    status: Status;
}

type Status = "available" | "pending" | 'sold'


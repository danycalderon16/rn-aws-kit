export async function apiFetch<T>(
    api: string,
    path:string,
    options?: RequestInit
) : Promise<T>{
    const res = await fetch(`${api}/${path}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
}

export async function createNote(
    api: string,
    path:string,
    note:string
) {
  const res = await fetch(`${api}/${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({note})
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();  
}
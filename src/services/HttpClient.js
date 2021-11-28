export const  RUTA_SERVIDOR = "http://localhost:3000";

const manejarResponse = (Response) => {
  if (Response.error) {
    throw new Error(JSON.stringify(Response.error));
  }
  return Response;
};

export const HttpClient = {
  post: (ruta, datos) => fetch(RUTA_SERVIDOR + ruta, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
        body: JSON.stringify(datos),
    })
        .then(r => r.json())
        .then(manejarResponse)
    ,
  put: (ruta, datos) => fetch(RUTA_SERVIDOR + ruta, {
            credentials: 'include',
            method: 'PUT',
            body: JSON.stringify(datos),
        })
            .then(r => r.json())
            .then(manejarResponse)
    ,
  get: ruta => fetch(RUTA_SERVIDOR + ruta, {
                    credentials: 'include',
                })
                .then(r => r.json())
                .then(manejarResponse)
                ,
  delete: ruta => fetch(RUTA_SERVIDOR + ruta, {
                credentials: 'include',
                method: 'DELETE',
            })
            .then(r => r.json())
            .then(manejarResponse),
};

export default { HttpClient };
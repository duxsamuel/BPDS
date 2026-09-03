"use client";

export default function Home() {
  return (
    <main
      className="pagina"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >

      <section
        className="todo"
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "24px",
          width: "100%",
          maxWidth: "400px",
          border: "2px solid #333",
        }}
      >

        {/* ENCABEZADO */}
        <header className="todo-header">
          <h1>MIS TAREAS</h1>
        </header>

        <div className="separador"></div>

        {/* CREAR NUEVA TAREA */}
        <section className="crear-tarea">

          <input
            id="nuevaTarea"
            type="text"
            placeholder="+ Escribe una nueva tarea..."
            aria-label="Nueva tarea"
          />

          <button
            id="btnAgregar"
            type="button"
            aria-label="Agregar tarea"
          >
            +
          </button>

        </section>

        {/* LISTA DE TAREAS */}
        <section
          id="listaTareas"
          className="lista-tareas"
        >

          {/* TAREA COMPLETADA */}
          <article
            className="tarea tarea-completada"
            data-id="1"
          >

            <button
              className="btn-completar completada"
              type="button"
              aria-label="Marcar tarea como completada"
            >
              ✓
            </button>

            <span className="texto-tarea">
              Solicitar cita médica
            </span>

            <button
              className="btn-editar"
              type="button"
              aria-label="Editar tarea"
            >
              ✎
            </button>

            <button
              className="btn-eliminar"
              type="button"
              aria-label="Eliminar tarea"
            >
              🗑
            </button>

          </article>


          {/* TAREA NORMAL */}
          <article
            className="tarea"
            data-id="2"
          >

            <button
              className="btn-completar"
              type="button"
              aria-label="Marcar tarea como completada"
            >
            </button>

            <span className="texto-tarea">
              Comprar leche y pan
            </span>

            <button
              className="btn-editar"
              type="button"
              aria-label="Editar tarea"
            >
              ✎
            </button>

            <button
              className="btn-eliminar"
              type="button"
              aria-label="Eliminar tarea"
            >
              🗑
            </button>

          </article>


          {/* TAREA EN EDICIÓN */}
          <article
            className="tarea tarea-editando"
            data-id="3"
          >

            <button
              className="btn-completar"
              type="button"
              aria-label="Marcar tarea como completada"
            >
            </button>

            <input
              id="editarTarea"
              className="input-editar"
              type="text"
              defaultValue="Terminar informe"
              aria-label="Editar tarea"
            />

            <button
              className="btn-editar"
              type="button"
              aria-label="Editar tarea"
            >
              ✎
            </button>

            <button
              className="btn-eliminar"
              type="button"
              aria-label="Eliminar tarea"
            >
              🗑
            </button>

          </article>


          {/* TAREA NORMAL */}
          <article
            className="tarea"
            data-id="4"
          >

            <button
              className="btn-completar"
              type="button"
              aria-label="Marcar tarea como completada"
            >
            </button>

            <span className="texto-tarea">
              Llamar al dentista
            </span>

            <button
              className="btn-editar"
              type="button"
              aria-label="Editar tarea"
            >
              ✎
            </button>

            <button
              className="btn-eliminar"
              type="button"
              aria-label="Eliminar tarea"
            >
              🗑
            </button>

          </article>

        </section>


        {/* INFORMACIÓN INFERIOR */}
        <footer className="todo-footer">

          <span className="ayuda-editar">
            Desktop: ✎ aparece con hover
          </span>

          <span className="ayuda-eliminar">
            hover → aparece 🗑
          </span>

        </footer>

      </section>

    </main>
  );
}
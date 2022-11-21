import React from "react";
import OrderForm from "./OrderForm";

export default function EditOrderCard() {

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title" id="cardTitle">Editar Orden</h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
              title="Collapse"
            >
              <i className="fas fa-minus" />
            </button>
          </div>
        </div>
        <div
          className="card-body"
        >
          <OrderForm />
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <a href="/" class="btn btn-sm btn-info float-right" id="submit">
            Actualizar orden
          </a>
        </div>
        {/* /.card-footer*/}
      </div>
    </form>
  );
}
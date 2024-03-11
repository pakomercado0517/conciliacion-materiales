/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";

export default function ResultsTable({ data, finalInfo }) {
  //funciónpara formatear los montos a mostrar en la tabla en $mxn
  const formatNumber = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  return (
    <section className="max-w-md mt-8 mx-auto">
      <Table>
        {/* <Table.Head>
          <Table.Row>
            <Table.HeadCell>Sociedad</Table.HeadCell>
            <Table.HeadCell>Material</Table.HeadCell>
            <Table.HeadCell>M3</Table.HeadCell>
            <Table.HeadCell>Precio</Table.HeadCell>
            <Table.HeadCell>Pago Total</Table.HeadCell>
            <Table.HeadCell>10% acarreo SUTERM</Table.HeadCell>
            <Table.HeadCell>$0.25 x Km</Table.HeadCell>
            <Table.HeadCell>Pago acarreo CTM</Table.HeadCell>
            <Table.HeadCell>Diferencia de Tarifa</Table.HeadCell>
            <Table.HeadCell>Material &#40;Costo Bancos&#41;</Table.HeadCell>
            <Table.HeadCell>Utilidad</Table.HeadCell>
          </Table.Row>
        </Table.Head> */}
        <Table.Body className="divide-x max-w-sm">
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              Sociedad
            </Table.Cell>
            <Table.Cell className="bg-white">{data.company}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              Material
            </Table.Cell>
            <Table.Cell className="bg-white">{data.materialName}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              M3
            </Table.Cell>
            <Table.Cell className="bg-white">{data.cubicMeters}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            {" "}
            <Table.Cell className="font-medium whitespace-nowrap">
              Precio
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(data.price)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              Pago Total
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.totalPrice)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              10% acarreo SUTERM
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.sutermPercentage)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              $0.25 x Km
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.kmPay)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              Pago acarreo CTM
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.transportPay)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              Diferencia de Tarifa
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.rateDifference)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            {" "}
            <Table.Cell className="font-medium whitespace-nowrap">
              Material &#40;Costo Bancos&#41;
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.materialBank)}
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-200">
            <Table.Cell className="font-medium whitespace-nowrap">
              Utilidad
            </Table.Cell>
            <Table.Cell className="bg-white">
              {formatNumber.format(finalInfo.utility)}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </section>
  );
}

"use client";
import { ExemplaireColumns } from "@/data/tableColumns";
import * as f from "@/components/Form";
import DataTable from "./DataTable";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { CustomColumnMenu } from "./ui/x-data-grid-customization/CustomColumnMenu";
import Button from "./ui/Button";
import Header from "./ui/Header";
import Input from "./ui/Input";

export function AddExe() {
  const [livre, setLivre] = useState<Map<any, any>>(new Map());
  const [ni, setni] = useState<number>();
  const [ob, setob] = useState<string>("");
  const ie = () => {
    let clone = new Map(livre);
    clone.set(ni, ob);
    setLivre(clone);
    setni(0);
    setob("");
    console.log(JSON.stringify(livre));
  };
  const ExemplaireColumns: GridColDef[] = [
    {
      field: "N_INVENTAIRE",
      headerName: "n_inventaire",
      type: "number",
      hideable: false,
    },
    {
      field: "OBSERVATIONE",
      headerName: "observation",
      type: "string",
      hideable: false,
    },
    {
      field: "actions",
      width: 70,
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={params.id}
          icon={<MdDelete className="text-xl" />}
          label="delete"
          onClick={() => {
            let clone = new Map(livre);
            clone.delete(params.id);
            setLivre(clone);
          }}
        />,
      ],
    },
  ];
  return (
    <>
      <f.FormField name="nbr_invEX" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Nombre d{"'"}inventaire :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le nombre d{"'"}inventaire
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nombre d{"'"}inventaire valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="nbr_invEX"
            type="number"
            maxLength={255}
            value={ni ? ni : ""}
            onChange={(e) => setni(parseInt(e.target.value))}
          />
        </f.FormControl>
      </f.FormField>

      <input
        type="hidden"
        name="exemplaire"
        value={JSON.stringify(
          Array.from(livre, ([key, value]) => ({
            N_INVENTAIRE: key,
            OBSERVATIONE: value,
          }))
        )}
      />

      {/* Observation_EXemplaire */}
      <f.FormField name="observationEX" className="w-full">
        <div className="w-full">
          <Header size={"md"}>Observation :</Header>
          <f.FormMessage match={"valueMissing"}>
            saisir l{"'"}observation
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir l{"'"}observation valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <textarea
            cols={50}
            rows={5}
            name="observationEX"
            className="w-full resize-none bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]"
            value={ob}
            onChange={(e) => setob(e.target.value)}
          />
        </f.FormControl>
      </f.FormField>

      <footer className="flex justify-center items-center py-12">
        <Button
          size={"md"}
          className="bg-[#CA3CFF] text-white w-3/12"
          onClick={(e) => {
            e.preventDefault();
            ie();
          }}
        >
          {""} Ajouter un exemplaire {""}
        </Button>
      </footer>

      <DataTable
        columns={ExemplaireColumns}
        rows={Array.from(livre, ([key, value]) => ({
          N_INVENTAIRE: key,
          OBSERVATIONE: value,
        }))}
        ID="N_INVENTAIRE"
        className="h-auto"
        customSlots={{
          columnMenu: CustomColumnMenu,
        }}
        hideFooter
      />
    </>
  );
}
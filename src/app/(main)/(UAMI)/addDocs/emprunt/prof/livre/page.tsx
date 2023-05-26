import * as f from "@/components/Form";

import Input from "@/components/ui/Input";
import AutoComplete from "@/components/ui/autoComplete";
import { getNinv } from "@/db/Get/Livres";
import { getProfshort } from "@/db/Get/Prof";
import Form from "./form";
import { getDate } from "@/utils/date";
import Header from "@/components/mui/MuiHeader";

export const dynamic = "force-dynamic";
const Page = async () => {
  const [Apoge, Inv] = await Promise.all([getProfshort(), getNinv()]);
  const result = Apoge.map(
    (obj) => obj.NOM + " " + obj.PRENOM + " " + obj.Code
  );
  const result2 = Inv.map((obj) => obj.N_INVENTAIRE);
  return (
    <Form>
      <div className="flex w-full">
        <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
          {/* nmr_Inv */}
          <f.FormField name="nmr_Inv" className="w-full">
            <div className="w-full">
              <Header
                variant="h6"
                sx={{
                  fontSize: "1.4993rem",
                  color: "#3a3541de",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                N d{"'"}inventaire :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le numero d{"'"}inventaire
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un nombre d{"'"}inventaire valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result2} name="nmr_Inv" />
            </f.FormControl>
          </f.FormField>
          {/* npm et prenom */}
          <f.FormField name="prof" className="w-full">
            <div className="w-full">
              <Header
                variant="h6"
                sx={{
                  fontSize: "1.4993rem",
                  color: "#3a3541de",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Code :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le Code
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un Code valid
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result} name="prof" />
            </f.FormControl>
          </f.FormField>
        </div>
        <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
          {/* date_D */}
          <f.FormField name="date_D" className="w-full">
            <div className="w-full">
              <Header
                variant="h6"
                sx={{
                  fontSize: "1.4993rem",
                  color: "#3a3541de",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Date début :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir la date début
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir une date début valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="date_D"
                type="date"
                maxLength={255}
                required
                defaultValue={getDate(new Date()) || ""}
              />
            </f.FormControl>
          </f.FormField>
        </div>
      </div>
    </Form>
  );
};

export default Page;

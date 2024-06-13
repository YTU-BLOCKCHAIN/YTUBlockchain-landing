import React from "react";
import { format } from "date-fns";
import { Locale } from "date-fns";
import ClassRow from "./ClassRow";
import { Class } from "../../types/types";

const ClassTable: React.FC<{
  classes: Class[];
  locale: Locale;
  t: any;
}> = ({ classes, locale, t }) => (
  <table className="min-w-full bg-white dark:bg-zinc-900 border dark:border-zinc-700 border-zinc-300">
    <tbody>
      {classes.map((cls, index) => (
        <React.Fragment key={index}>
          <tr className="border-b dark:border-zinc-600 border-zinc-300">
            <td className="dark:bg-zinc-700 bg-zinc-300 p-4" colSpan={2}>
              {format(new Date(cls.date), "EEE, MMMM d", { locale })}
            </td>
          </tr>
          <ClassRow cls={cls} />
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default ClassTable;

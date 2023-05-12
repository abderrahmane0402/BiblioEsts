"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Button = ({ name }: { name: string }) => {
  let path = usePathname();
  const link = path!.split("/");
  const [active, setactive] = useState(false);
  useEffect(() => {
    setactive(path!.includes(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setactive(path!.includes(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  return (
    <button
      className={`${
        active ? "bg-black/80 text-white" : ""
      } w-24 text-lg py-2 rounded-md hover:bg-black hover:text-white duration-500 transition-colors`}
    >
      <Link href={`/emprunt/${name}/${link[3]}/${link[4]}`}>{name}</Link>
    </button>
  );
};

export const Button2 = ({ name }: { name: string }) => {
  const path = usePathname();
  const link = path!.split("/");
  const [active, setactive] = useState(false);
  useEffect(() => {
    setactive(path!.includes(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setactive(path!.includes(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  return (
    <button
      className={`${
        active ? "bg-lime-600/80 text-white" : ""
      } w-24 text-lg py-2 rounded-md hover:bg-lime-600 hover:text-white duration-500 transition-colors`}
    >
      <Link href={`/emprunt/${link[2]}/${name}/${link[4]}`}>{name}</Link>
    </button>
  );
};

export const Button3 = ({ name }: { name: string }) => {
  const path = usePathname();
  const link = path!.split("/");
  const [active, setactive] = useState(false);
  useEffect(() => {
    setactive(path!.includes(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setactive(path!.includes(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  return (
    <button
      className={`${
        active ? "bg-red-700/80 text-white" : ""
      } w-24 text-lg py-2 rounded-md hover:bg-red-700 hover:text-white duration-500 transition-colors`}
    >
      <Link href={`/emprunt/${link[2]}/${link[3]}/${name}`}>{name}</Link>
    </button>
  );
};

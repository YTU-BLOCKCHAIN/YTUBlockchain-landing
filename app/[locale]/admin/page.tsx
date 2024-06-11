"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import AddClassForm from "../../../components/AddClassForm";

const AdminPage = () => {
  const { token } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  useEffect(() => {
    if (!token) {
      router.push(`/${locale}/login`);
    }
  }, [token, locale, router]);

  if (!token) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <AddClassForm />
    </div>
  );
};

export default AdminPage;

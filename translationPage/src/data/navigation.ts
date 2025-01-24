import type { Navigation } from "../types/index";
import { useTranslation } from "react-i18next";



export const navigation = (): Navigation[] => {
    const { t } = useTranslation("global");

    return [
        { id: 1, name: t("header.About_us"), href: "#" },
        { id: 2, name: t("header.Our_services"), href: "#" },
        { id: 3, name: t("header.Industries"), href: "#" },
        { id: 4, name: t("header.Data_Security"), href: "#" },
        { id: 5, name: t("header.Customers"), href: "#" },
        { id: 6, name: t("header.Contact_us"), href: "#" },
        { id: 7, name: t("header.Language"), href: "#" }
    ];
};
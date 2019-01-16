import { Page } from "../model/page";
import { DataLinkEntity } from "../core/dataLink/dataLink.entity";

export interface DefaultPageProps {
    page: Page,
    dataLink: DataLinkEntity
}
"use client";

import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

interface BreadcrumbsProps {
    items: Array<{
        href: string;
        title: string;
    }>;
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    const breadcrumbElements: React.JSX.Element[] = [];

    items.forEach((item, index) => {
        breadcrumbElements.push(
            <BreadcrumbItem key={`item-${index}`}>
                <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.title}</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
        );

        if (index !== items.length - 1) {
            breadcrumbElements.push(
                <BreadcrumbSeparator key={`separator-${index}`} />
            );
        }
    });

    return (
        <Breadcrumb className="mb-6">
            <BreadcrumbList>
                <Home className="w-3 h-3" />
                {breadcrumbElements}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export interface SupplierAlertProps {
    supplier: string;
    showNotification?: boolean;
}

export const SupplierAlert = ({ supplier, showNotification = true }: SupplierAlertProps) => {
    // Skip rendering if no supplier or notification is disabled
    if (!supplier || !showNotification) {
        return null;
    }

    return (
        <Alert className="mb-4">
            <Info className="h-4 w-4 mr-2" />
            <AlertTitle className="text-sm font-medium">Supplier Information</AlertTitle>
            <AlertDescription className="text-sm text-muted-foreground">
                You are viewing product details from <span className="font-bold">{supplier}</span>.
                This supplier is authorized to distribute our products.
            </AlertDescription>
        </Alert>
    );
};

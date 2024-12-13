// src/utils/dynamicImport.ts
export const dynamicImport = async (importFn: () => Promise<any>, fallback: any) => {
    try {
        return await importFn();
    } catch (error) {
        console.error("Failed to load remote module:", error);
        return fallback;
    }
};

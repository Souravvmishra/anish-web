import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const products = [
    { name: "Bathtub", category: "Sanitary Ware" },
    { name: "Water Closets", category: "Sanitary Ware" },
    { name: "uPVC Pipes", category: "Pipes & Fittings" },
    // Add all other products...
]

export default function ProductsSection() {
    return (
        <div className="min-h-screen bg-background">
            {/* Products Section */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-8 text-center">Products We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <Card key={product.name} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <Badge variant="secondary">{product.category}</Badge>
                                    </div>
                                    <h3 className="font-medium mb-2">{product.name}</h3>
                                    <Button variant="outline" size="sm">
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary text-primary-foreground py-12">
                <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <p>Harit Bhawan, Harmu Road, Ranchi</p>
                        <p>0651-2283633 / 9835155006</p>
                        <p>anishent.ranchi@gmail.com</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Products</h3>
                        <ScrollArea className="h-32">
                            <div className="space-y-2">
                                {products.map((product) => (
                                    <div key={product.name}>{product.name}</div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    <div className="text-center md:text-right">
                        <p>© Anish Enterprises 2023</p>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

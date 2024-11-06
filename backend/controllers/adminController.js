// controllers/adminController.js

const addProduct = async (req, res) => {
    try {
        const { name, id, image, category, priceOptions, description } = req.body;
        const imageFile = req.file;

        console.log({ name, id, image, category, priceOptions, description }, imageFile);

        // Add any other logic you want here

        res.status(201).send({ message: 'Product added successfully' });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send({ error: 'Failed to add product' });
    }
};

export { addProduct };

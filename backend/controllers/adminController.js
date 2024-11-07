const addProduct = async (req, res) => {
    try {
        const { name, id, category, priceOptions, description } = req.body;
        const imageFile = req.file;

        // Check for missing fields
        if (!name || !id || !imageFile || !category || !priceOptions || !description) {
            return res.status(400).send({ error: 'Please provide all required fields' });
        }

        // Process image path if file exists
        const image = `/uploads/${imageFile.filename}`;

        const productData = {
            name,
            id,
            image,
            category,
            priceOptions,
            description,
        };

        const newProduct = new productModel(productData);
        const product = await newProduct.save();

        res.status(201).send({ message: 'Product added successfully', product });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send({ error: 'Failed to add product' });
    }
};

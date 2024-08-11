function generateImage() {
    const productName = document.getElementById('productName').value;
    const originalPrice = document.getElementById('originalPrice').value;
    const discountedPrice = document.getElementById('discountedPrice').value;

    document.getElementById('outputProductName').innerText = `Sản Phẩm: ${productName}`;
    document.getElementById('outputOriginalPrice').innerText = `Giá Niêm Yết: ${originalPrice}`;
    document.getElementById('outputDiscountedPrice').innerText = `Giá Giảm: ${discountedPrice}`;

    document.getElementById('outputContainer').style.display = 'block';
}

function printImage() {
    const printContents = document.getElementById('outputImage').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload();
}

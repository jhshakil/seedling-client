const MosaicGallery = () => {
  return (
    <section className="px-8 py-12">
      <h2 className="text-3xl mb-8 font-bold text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image1.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image2.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image3.jpg"
              alt="Gallery"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image4.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image5.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image6.jpg"
              alt="Gallery"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image7.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image8.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image9.jpg"
              alt="Gallery"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image10.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image11.jpg"
              alt="Gallery"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/images/gallery/image12.jpg"
              alt="Gallery"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicGallery;

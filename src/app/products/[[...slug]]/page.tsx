import React from "react";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: { sortOrder: string };
}

const PageProduct = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      PageProduct slug {slug} sortorder = {sortOrder}
    </div>
  );
};

export default PageProduct;

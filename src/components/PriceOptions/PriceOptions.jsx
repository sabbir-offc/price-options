import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities",
        "Standard fitness classes",
        "Basic locker access",
        "No commitment",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Access to gym facilities",
        "Unlimited fitness classes",
        "Premium locker access",
        "Free personal trainer session",
        "Month-to-month commitment",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: 79.99,
      features: [
        "Access for up to 4 family members",
        "Access to gym facilities",
        "Unlimited fitness classes",
        "Premium locker access",
        "Free personal trainer session",
        "Month-to-month commitment",
      ],
    },
    {
      id: 4,
      name: "Student Membership",
      price: 24.99,
      features: [
        "Access to gym facilities",
        "Standard fitness classes",
        "Basic locker access",
        "Valid student ID required",
        "No commitment",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl">Best Price in the town</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

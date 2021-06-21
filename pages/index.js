import Onboarding from "../components/Onboarding"

const IndexPage = () => {
  return <>
    <Onboarding
      skipHandler={() => { console.log('Skip Handler') }}
      completeHandler={() => { console.log('Onboarding complete') }}>
      <Onboarding.Page className="flex flex-col items-center bg-blue-600 p-8">
        <div className="w-full h-64 bg-blue-700 rounded-lg mb-6" />
        <span className="inline-block text-2xl font-bold text-blue-50 mb-3">Get Inspired</span>
        <p className="text-center text-blue-200">
          Don't know what to eat? Take a picture, we'll suggest things to cook with your ingredients.
        </p>
      </Onboarding.Page>
      <Onboarding.Page className="flex flex-col items-center bg-yellow-600 p-8">
        <div className="w-full h-64 bg-yellow-700 rounded-lg mb-6" />
        <span className="inline-block text-2xl font-bold text-yellow-50 mb-3">Easy & healthy</span>
        <p className="text-center text-yellow-200">
          Find thousands of easy and healthy recipes so you save time and eat beter.
        </p>
      </Onboarding.Page>
      <Onboarding.Page className="flex flex-col items-center bg-green-600 p-8">
        <div className="w-full h-64 bg-green-700 rounded-lg mb-6" />
        <span className="inline-block text-2xl font-bold text-green-50 mb-3">Save your favorites</span>
        <p className="text-center text-green-200">
          Save your favorite recipes and get reminders to but the ingredientes to cook them.
        </p>
      </Onboarding.Page>
    </Onboarding>
  </>
}

export default IndexPage;

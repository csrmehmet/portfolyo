import { useSelector } from 'react-redux';

function Profile() {
  const { profile, aboutMe } = useSelector(state => state.user);

  return (
    <section className="profile container mx-auto px-24 py-16">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Profile</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="profile-details md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Profile</h3>
          <div className="mb-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">{profile.birthDate.label}:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">{profile.birthDate.value}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">{profile.city.label}:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">{profile.city.value}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">{profile.education.label}:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              {profile.education.university} {profile.education.department}<br />
              {profile.education.degree}, {profile.education.graduationYear}
            </span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">{profile.preferredRole.label}:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">{profile.preferredRole.value}</span>
          </div>
        </div>
        <div className="about-me md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">About Me</h3>
          {aboutMe && aboutMe.paragraphs && aboutMe.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600 dark:text-gray-400">{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="mt-16 border-b border-purple-400 dark:border-gray-700"></div>
    </section>
  );
}

export default Profile;